import Swal from 'sweetalert2'

export default function () {
    function toast(title:string , icon:any = "success") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: title
        }) 
    }

    function dialog(title:string , icon:any = "success") {
        Swal.fire({
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 3000
        })
    }

    return {toast , dialog}
}