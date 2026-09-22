import React from "react";

const PageContainer = ({
    title,
    subtitle,
    children,
}) => {
    return (
        <main className="min-h-screen bg-slate-50">

            {/* Page Header */}

            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

                    <div className="max-w-3xl">

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {title}
                        </h1>

                        {subtitle && (
                            <p className="mt-4 text-blue-100 text-lg leading-8">
                                {subtitle}
                            </p>
                        )}

                    </div>

                </div>

            </section>

            {/* Content */}

            <section className="page-container">

                {children}

            </section>

        </main>
    );
};

export default PageContainer;