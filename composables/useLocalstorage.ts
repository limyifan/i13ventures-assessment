export const useLocalstorage = () => {

    const key="homensurance/isIntroPresented"
    const getIsIntroPresented = () => {
        return localStorage.getItem(key);
    };
    const setIsIntroPresented = (code: string) => {
        localStorage.setItem(key, true);
    };
    return {
        getIsIntroPresented,
        setIsIntroPresented,
    };
};
