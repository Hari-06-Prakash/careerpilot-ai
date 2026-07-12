type Props = {
    personalInformation: {
        name: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
};

export default function PersonalInfoCard({
    personalInformation,
}: Props) {

    return (

        <div className="rounded-xl bg-slate-800 p-6 shadow-lg">

            <h2 className="mb-6 text-2xl font-bold text-white">

                👤 Personal Information

            </h2>

            <div className="space-y-3">

                <p className="text-gray-300">

                    <strong>Name:</strong>

                    {" "}

                    {personalInformation.name}

                </p>

                <p className="text-gray-300">

                    <strong>Email:</strong>

                    {" "}

                    {personalInformation.email}

                </p>

                <p className="text-gray-300">

                    <strong>Phone:</strong>

                    {" "}

                    {personalInformation.phone}

                </p>

                <p className="text-gray-300">

                    <strong>LinkedIn:</strong>

                    {" "}

                    {personalInformation.linkedin}

                </p>

                <p className="text-gray-300">

                    <strong>GitHub:</strong>

                    {" "}

                    {personalInformation.github}

                </p>

            </div>

        </div>

    );

}