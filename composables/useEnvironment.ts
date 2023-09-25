export const useEnvironment = () => {
    const config = useRuntimeConfig();
    const mode = config.public.mode
    const isProduction = mode === 'production'
    return {
        mode,
        isProduction
    }
}
