import ContactForm from '../ContactForm';
import { useLocation } from 'react-router';

const EditContactPage = () => {
  const location = useLocation();
  const paramsId = location.pathname.split('/')[2];

  return (
    <section>
      <div>
        <ContactForm type="Edit" paramsId={paramsId} />
      </div>
    </section>
  );
};

export default EditContactPage;
