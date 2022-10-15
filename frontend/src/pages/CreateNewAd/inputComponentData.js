import { Input, InputNumber, TextArea } from '../../components/atoms/Forms/NewAds'

const data = [
  {
    Component: Input,
    type: 'text',
    label: 'Título',
    name: 'title',
    required: true,
    className: 'style-input-create-new-ad',
  },
  {
    Component: TextArea,
    type: 'text',
    label: 'Descripción',
    name: 'description',
  },
  {
    Component: Input,
    type: 'text',
    label: 'Ciudad',
    name: 'city',
    required: true,
    icon: 'location_on',
    className: 'style-input-create-new-ad',
  },
  {
    Component: InputNumber,
    type: 'number',
    label: 'Habitaciones',
    name: 'n_rooms',
    icon: 'Bed',
    className: 'style-input-create-new-ad',
  },
  {
    Component: InputNumber,
    type: 'number',
    label: 'Precio',
    name: 'price',
    required: true,
    icon: 'Euro',
    className: 'style-input-create-new-ad',
  },
  {
    Component: InputNumber,
    type: 'number',
    label: 'M\u00B2',
    name: 'square_meters',
    required: true,
    icon: 'Home',
    className: 'style-input-create-new-ad',
  },
  {
    Component: InputNumber,
    type: 'number',
    label: 'Baños',
    name: 'n_bathrooms',
    icon: 'Bathtub',
    className: 'style-input-create-new-ad',
  },
]
export default data
