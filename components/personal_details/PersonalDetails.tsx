import Qualifications from "./Qualifications";

const PersonalDetails = ({ ...props }) => {
  return (
    <div {...props} className={`section_padding pb-40`}>
      <div className="text-center space-y-2 mb-32">
        <p className="section_title">Personal Details</p>
        <p className="section_intro">
          I am a Full Stack Web Developer of over a year experience in making
          responsive, scalable and smooth user experience website. I have done
          my graduation in Physics from Banaras Hindu University.
        </p>
      </div>
      <Qualifications />
    </div>
  );
};

export default PersonalDetails;
