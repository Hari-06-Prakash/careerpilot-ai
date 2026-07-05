import api from "./api";

export const uploadResume = async (
    file: File,
    userId: number
) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        `/resume/upload?user_id=${userId}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const getUserResumes = async (
    userId: number
) => {

    const response = await api.get(
        `/resume/?user_id=${userId}`
    );

    return response.data;
};

export const deleteResume = async (resumeId: number) => {
    const response = await api.delete(`/resume/${resumeId}`);
    return response.data;
};