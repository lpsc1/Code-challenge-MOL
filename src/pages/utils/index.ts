export function checkIfEmailIsValid(email: string): boolean {
    const extractAtBefore = email.substring(0, email.indexOf("@"));
    const extractAtAfter = email.substring(email.indexOf("@") + 1, email.length);
    if (
        extractAtBefore.length >= 1 &&
        extractAtAfter.length >= 3 &&
        extractAtBefore.search("@") == -1 &&
        extractAtAfter.search("@") == -1 &&
        extractAtBefore.search(" ") == -1 &&
        extractAtAfter.search(" ") == -1 &&
        extractAtAfter.search(".") != -1 &&
        extractAtAfter.indexOf(".") >= 1 &&
        extractAtAfter.lastIndexOf(".") < extractAtAfter.length - 1
    ) {
        return true;
    } return false;

}

export function formatCellphone(cellphone: string): string {
    if (
        (cellphone.length > 15 &&
            cellphone.search(" ") != -1) ||
        (cellphone.length > 11 &&
            cellphone.search(" ") == -1)) {
        return cellphone.replace(/\D/g, "")
    }
    return cellphone
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2")
}