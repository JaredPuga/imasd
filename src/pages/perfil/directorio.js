import Tree from 'react-d3-tree';
import Swal from 'sweetalert2';
import Layout from '../../../components/layout';

function Organigrama() {

  const data = {
    name: 'Juan',
    attributes: {
        position: 'Director General',
        email: 'correo1@correo.com',
        tel: '6549876542'
    },
    children: [
      {
        name: 'María',
        attributes: {
          position: 'Gerente de Ventas',
          email: 'correo12@correo.com',
          tel: '123456789'
          
        },
        children: [
          {
            name: 'Luisa',
            attributes: {
              position: 'Jefa de Ventas',
              email: 'correo1111@correo.com',
              tel: '333333333'
            },
          },
        ],
      },
      {
        name: 'Pedro',
        attributes: {
          position: 'Gerente de Producción',
          email: 'correo44@correo.com',
          tel: '1236546'
        },
        children: [
          {
            name: 'Juanita',
            attributes: {
              position: 'Jefa de Producción',
              email: 'correo0909@correo.com',
              tel: '00000000',
            },
            children: [
                {
                    name: 'Jose',
                    attributes: {
                        position: 'Programador',
                        email: 'pr1@correo.com',
                        tel: '45697'
                    }
                },
                {
                    name: 'Pedro',
                    attributes: {
                        position: 'Programador',
                        email: 'pr2@correo.com',
                        tel: '654684'
                    }
                }
            ]
          },
        ],
      },
      {
        name: 'Alberto',
        attributes: {
            position: 'Intendente',
            email: 'intendencia@correo.com',
            tel: '45697'
        }
       }
    ],
  };


  const nodeSize = {
    x: 200,
    y: 100,
  };


  const renderCustomNodeElement = ({ nodeDatum }) => {
    const nodeStyle =
      'flex items-center justify-center w-24 h-24 rounded-full bg-blue-500 text-white';
    const textStyle = 'text-center';

    console.log(nodeDatum);

    const toggleNode = () => {
        Swal.fire({
            title: `${nodeDatum.name}`,
            html: `${nodeDatum.attributes.email +" Tel:"+ nodeDatum.attributes.tel}`,
            icon: 'info'
            
        })
    }

    return (
      <g onClick={toggleNode}>
        <circle className={nodeStyle} r={12} />
        <text className={textStyle} y={30}>
          {nodeDatum.name}
        </text>
        <text className={textStyle} y={50}>
          {nodeDatum.attributes?.position}
        </text>
      </g>
    );
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Tree
        data={data}
        nodeSize={nodeSize}
        renderCustomNodeElement={renderCustomNodeElement}
        translate={{ x: 300, y: 200 }}
      />
    </div>
  );
}

export default function Directorio() {
  return (
    <Layout title='Directorio'>
        <h1 className='text-center text-4xl uppercase font-bold mt-5'>Organigrama de la <span className='text-orange-400'>empresa</span></h1>
        <Organigrama />
    </Layout>
)
}

