export enum Size {
    SMALL = 'sm',
    PHONE = 'phone',
    IPAD = 'ipad',
    PC = 'pc',
}

export type ScreenSize =
    | typeof Size.SMALL
    | typeof Size.PHONE
    | typeof Size.IPAD
    | typeof Size.PC

export const defaultScreenConfig = {
    [Size.SMALL]: 576,
    [Size.PHONE]: 768,
    [Size.IPAD]: 992,
    [Size.PC]: 1400,
}

export const useScreen = () => {
    const screenSize = reactive({
        width: 0,
        height: 0,
    })

    const current = ref<ScreenSize>(Size.SMALL)

    const getSize = (width?: number) => {
        if (width === undefined) width = screenSize.width
        const {
            [Size.SMALL]: sm,
            [Size.PHONE]: md,
            [Size.IPAD]: lg,
            [Size.PC]: xl,
        } = defaultScreenConfig
        if (width < Number(sm)) return Size.SMALL
        if (width < Number(md)) return Size.PHONE
        if (width < Number(lg)) return Size.IPAD
        if (width < Number(xl)) return Size.PC
        return Size.PC
    }

    const onWindowResize = () => {
        const {innerWidth, innerHeight} = window
        screenSize.width = innerWidth
        screenSize.height = innerHeight
        current.value = getSize()
    }

    const higherThan = (size: ScreenSize) => {
        const {
            [Size.SMALL]: sm,
            [Size.PHONE]: md,
            [Size.IPAD]: lg,
            [Size.PC]: xl,
        } = defaultScreenConfig
        const width = screenSize.width
        if (size === Size.SMALL) return width >= Number(sm)
        if (size === Size.PHONE) return width >= Number(md)
        if (size === Size.IPAD) return width >= Number(lg)
        if (size === Size.PC) return width >= Number(xl)
        return false
    }

    onMounted(() => {
        if (typeof window === 'undefined') return
        onWindowResize()
        window.addEventListener('resize', onWindowResize)
        getSize(window.innerWidth)
    })

    onUnmounted(() => {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', onWindowResize)
    })

    return {
        getSize,
        screenSize,
        current,
        higherThan,
    }
}
