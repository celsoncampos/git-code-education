interface IProps {
name: string
email: string
}

function sendEmail({ name, email }: IProps){
return `Seu nome é ${name} seu email é ${email}.`
}
