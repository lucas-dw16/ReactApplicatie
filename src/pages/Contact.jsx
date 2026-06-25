function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <form>
        <input type="text" placeholder="Naam" />
        <br />
        <br />

        <input type="email" placeholder="E-mail" />
        <br />
        <br />

        <button type="submit">Versturen</button>
      </form>
    </div>
  );
}

export default Contact;