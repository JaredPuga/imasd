
import Swal from 'sweetalert2';

export default function ModalContent({servicio}) {

  const { nombre } = servicio

    return (
      Swal.fire(
        {nombre},
        'You clicked the button!',
        'success'
      )
    );
}
