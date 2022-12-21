import { FormEvent, useState } from "react";
import { checkIfEmailIsValid } from "../utils";

export const useForm = () => {
    const [email, setEmail] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [emailArray, setEmailArray] = useState<string[]>([]);
    const [cellphoneArray, setCellphoneArray] = useState<string[]>([]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
    };

    function handleAddEmail() {
        const isValid = checkIfEmailIsValid(email);
        if (isValid){
            const alreadyExists = emailArray.find((item) => item === email);
            if (!alreadyExists) {
                setEmailArray([...emailArray, email]);
                setEmail(" ");
            } else {
                alert("E-mail já cadastrado.");
            }
        } else {
            alert("Adicione um e-mail válido.");
        }
    };

    function handleAddCellphone() {
        if (cellphone.replace(/\D/g, "").length >= 10) {
            const alreadyExists = cellphoneArray.find((item) => item === cellphone);
            if (!alreadyExists) {
                setCellphoneArray([...cellphoneArray, cellphone]);
                setCellphone(" ");
            } else {
                alert("Número já cadastrado.");
            }
        } else {
            alert("Adicione um número válido.");
        }
    };

    function handleDeleteEmail(email: string) {
        const newArray = emailArray.filter((item) => item !== email);
        setEmailArray(newArray);
    };

    function handleDeleteCellPhone(cellphone: string) {
        const newArray = cellphoneArray.filter((item) => item !== cellphone);
        setCellphoneArray(newArray);
    };

    return {
        email,
        setEmail,
        emailArray,
        cellphone,
        setCellphone,
        cellphoneArray,
        handleSubmit,
        handleDeleteEmail,
        handleDeleteCellPhone,
        handleAddEmail,
        handleAddCellphone
    };
}