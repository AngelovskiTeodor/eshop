export const isSet = (str: string | null | undefined): Boolean => {
    if (!str || str == null || str == undefined || str == "") {
        return false
    }
    return true
}