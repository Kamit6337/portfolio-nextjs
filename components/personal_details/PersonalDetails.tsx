import Qualifications from "./Qualifications";

const PersonalDetails = ({ ...props }) => {
  return (
    <div {...props} className={`section_padding pb-40`}>
      <div className="text-center space-y-2 mb-32">
        <p className="section_title">Personal Details</p>
        <p>
          I am done my graduation from banaras Hindu University, Varanasi,
          India. Now, I am a Full Stack Web Developer of over a year experience
          in making responsive, cutting-edge design and smooth user experience.
          I have learn from various different sources like Udemy, Youtube etc.
        </p>
      </div>
      <Qualifications />
    </div>
  );
};

export default PersonalDetails;
