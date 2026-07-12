type Props = {
    education: any[];
};

export default function EducationCard({
    education,
}: Props) {

    return (

        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">

            <h2 className="mb-6 text-2xl font-bold text-white">
                🎓 Education
            </h2>

            <div className="space-y-4">

                {

                    education.map((item, index) => (

                        typeof item === "string" ? (

                            <div
                                key={index}
                                className="rounded-lg border border-slate-700 p-4 text-gray-300"
                            >

                                {item}

                            </div>

                        ) : (

                            <div
                                key={index}
                                className="rounded-lg border border-slate-700 p-4"
                            >

                                <h3 className="text-lg font-semibold text-white">
                                    {item.degree}
                                </h3>

                                <p className="text-gray-300">
                                    {item.institution}
                                </p>

                                <p className="text-gray-400">
                                    {item.years}
                                </p>

                                <p className="text-green-400">
                                    {item.gpa}
                                </p>

                            </div>

                        )

                    ))

                }

            </div>

        </div>

    );

}