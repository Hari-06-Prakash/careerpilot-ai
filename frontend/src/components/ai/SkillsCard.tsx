type Props = {
    skills: string[];
};

export default function SkillsCard({
    skills,
}: Props) {

    return (

        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">

            <h2 className="mb-6 text-2xl font-bold text-white">

                🧠 Skills

            </h2>

            <div className="flex flex-wrap gap-3">

                {

                    skills.map((skill, index) => (

                        <span
                            key={index}
                            className="rounded-full bg-blue-600 px-4 py-2 text-white"
                        >

                            {skill}

                        </span>

                    ))

                }

            </div>

        </div>

    );

}