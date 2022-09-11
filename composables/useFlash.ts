import Swal from 'sweetalert2'

export default function () {
    function toast(title: string, icon: any = "success") {
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

    function dialog(title: string, body:string = '' , icon: any = "success") {
        Swal.fire({
            title: title,
            text: body,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Done!',
                    'Something has been done.',
                    'success'
                )
            }
        })
    }

    return { toast, dialog }
}