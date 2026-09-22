import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PAGE_IDS = [
    "pdf-cover",
    "pdf-front-findings",
    "pdf-side-findings",
    "pdf-recommendation",
    "pdf-disclaimer",
];

// Waits for every <img> inside a node to actually finish loading its
// bitmap. ScanImages.jsx uses URL.createObjectURL(), which sets `src`
// synchronously but decodes the image asynchronously — if html2canvas
// snapshots before that finishes, images (or the whole page) come out blank.
const waitForImages = (node) => {

    const imgs = Array.from(node.querySelectorAll("img"));

    return Promise.all(
        imgs.map((img) => {

            if (img.complete && img.naturalWidth !== 0) {
                return Promise.resolve();
            }

            return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve; // don't let a broken image block the whole PDF
            });

        })
    );

};

// Give the browser two paint frames so layout/CSS is fully settled
// before we screenshot it.
const nextFrame = () =>
    new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
    );

const generatePDF = async (scanData) => {

    try {

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true,
        });

        const pdfWidth = 210;
        const pdfHeight = 297;

        let renderedCount = 0;

        for (let i = 0; i < PAGE_IDS.length; i++) {

            const page = document.getElementById(PAGE_IDS[i]);

            if (!page) {
                console.warn(`${PAGE_IDS[i]} not found in DOM`);
                continue;
            }

            // THIS is what usually causes a fully blank PDF: if the
            // container holding these pages is styled with
            // `display: none`, the browser gives it 0x0 size and
            // html2canvas silently captures an empty white canvas.
            // It must be hidden off-screen instead, never with display:none.
            if (page.offsetWidth === 0 || page.offsetHeight === 0) {
                console.warn(
                    `${PAGE_IDS[i]} has zero size — it is likely hidden with ` +
                    `display:none, or not mounted yet. Skipping to avoid a blank page.`
                );
                continue;
            }

            await waitForImages(page);
            await nextFrame();

            const canvas = await html2canvas(page, {

                scale: 3,

                useCORS: true,

                allowTaint: false,

                backgroundColor: "#FFFFFF",

                logging: false,

                imageTimeout: 15000,

                width: page.scrollWidth,

                height: page.scrollHeight,

                windowWidth: page.scrollWidth,

                windowHeight: page.scrollHeight,

            });

            const image = canvas.toDataURL(
                "image/jpeg",
                1.0
            );

            if (renderedCount !== 0) {
                pdf.addPage();
            }

            pdf.addImage(
                image,
                "JPEG",
                0,
                0,
                pdfWidth,
                pdfHeight,
                undefined,
                "FAST"
            );

            renderedCount += 1;
        }

        if (renderedCount === 0) {
            throw new Error(
                "No report pages were captured. Check that #pdf-cover, " +
                "#pdf-front-findings, etc. are actually mounted and visible " +
                "(not display:none) at the moment generatePDF() runs."
            );
        }

        const fileName =
            (
                scanData.fullName ||
                "Posture_Report"
            )
                .trim()
                .replace(/\s+/g, "_");

        pdf.save(`${fileName}_Report.pdf`);

    } catch (err) {

        console.error("PDF Generation Failed", err);
        throw err; // let the caller (your download button) know it failed

    }

};

export default generatePDF;