
import React from 'react';

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center justify-center p-4 h-24 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
        <span className="text-center font-semibold text-gray-600">{name}</span>
    </div>
);

const Partners: React.FC = () => {
    const partnerNames = [
        "Metropolitan University",
        "Sakura Technical Institute",
        "Global Innovations University",
        "National University of Medical Sciences",
        "Apex Research College",
        "Continental Institute of Technology"
    ];

    return (
        <section id="partners" className="py-20 bg-rada-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-rada-blue">Trusted by Leading Institutions Worldwide</h2>
                    <p className="mt-3 text-lg text-gray-600">We are proud to partner with universities and higher education institutions from diverse cultural and academic landscapes.</p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
                    {partnerNames.map(name => <PartnerLogo key={name} name={name} />)}
                </div>
            </div>
        </section>
    );
};

export default Partners;
