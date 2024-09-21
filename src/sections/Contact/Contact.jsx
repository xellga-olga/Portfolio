import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

const Contact = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <section id="contact" className={styles.contactSection}>
         <h1 className="sectionTitle">Contact</h1>

         <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroupName}>
               <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className={errors.name ? styles.inputError : ""}
               />
               {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
            </div>

            <div className={styles.formGroupEmail}>
               <input
                  {...register("email", {
                     required: "Email is required",
                     pattern: /\S+@\S+\.\S+/,
                  })}
                  placeholder="Email"
                  className={errors.email ? styles.inputError : ""}
               />
               {errors.email && <p className={styles.errorMessage}>Email is invalid</p>}
            </div>

            <div className={styles.formGroupMessage}>
               <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className={errors.message ? styles.inputError : ""}
               />
               {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
            </div>

            <input
               className={`${styles.submitButton} ${Object.keys(errors).length > 0 ? styles.disabledButton : ""}`}
               value="Submit"
               type="submit"
            />
         </form>
      </section>
   );
};

export default Contact;