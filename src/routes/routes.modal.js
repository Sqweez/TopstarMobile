import CodeScreen from "../components/modals/CodeScreen";
import RequestRegistrationCallModal from "../components/modals/RequestRegistrationCallModal";
import RequestCallBackScreen from '../components/modals/RequestCallBackScreen';

export default [
  {
    name: 'Code',
    component: CodeScreen,
    title: 'СМС-подтверждение',
    presentation: 'modal',
    emptyLayout: true,
  },
  {
    name: 'RequestRegistrationCallModal',
    component: RequestRegistrationCallModal,
    title: 'Закажите обратный звонок',
    presentation: 'modal',
    emptyLayout: true,
  },
  {
    name: 'RequestCallBackScreen',
    component: RequestCallBackScreen,
    title: 'Закажите обратный звонок',
    presentation: 'modal',
    emptyLayout: true,
  }
];
