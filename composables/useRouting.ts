import {useLocalstorage} from "~/composables/useLocalstorage";

export const useRouting = () => {
    const router=useRouter()

    const viewCourses = () => {
        const{getIsIntroPresented,setIsIntroPresented}=useLocalstorage()
        const isPresented =getIsIntroPresented()
        if(!isPresented){
            setIsIntroPresented(true)
            router.push("/intro")
        }
        else
        {
            router.push("/plans")
        }
    };
    return{
        viewCourses
    }
};
