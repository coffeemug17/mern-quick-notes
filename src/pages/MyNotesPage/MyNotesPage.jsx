import * as usersService from "../../utilities/users-service";

export default function MyNotesPage() {
  async function handleCheckToken(evt) {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>My Previously Created Notes</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}