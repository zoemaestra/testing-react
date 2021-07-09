import Gallery from './Gallery'
import { useState, useEffect } from 'react';
const Timetable = () => {
  const images = require.context('../images', true);
  let loadImage = imageName => (images(`./${imageName}`).default);

  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/repos/zoemaestra/teamdev2020');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  return (
    <div>
      <header>
        <img src={loadImage("timetable.png")} alt="Timetable icon" />
        <h1>Teacher Timetable System</h1>
        <h2><span id="bio">{data.description}</span></h2>
        <h3 id="stats">{data.stargazers_count} stars</h3>
        <h3><a href={data.html_url} id="gitUrl">View on GitHub</a></h3>
      </header>
      <section>
        <h3>Intro</h3>
        <p>
          The Teacher Timetable is part of a wider system build for IMAT3903 Team Development Project. It is made in C#
          ASP.NET and is part of a single Visual Studio solution containing the team's projects.
        </p>
        <h3>How it is made</h3>
        <p>
          The Timetable system is made with ASP.NET C# and an Azure DB as the data storage, with database changes being
          done with stored procedures for security. Logins and signups are done with password hashing and uses a GMail
          account to send out password reset codes - this part is shared with the rest of the team.
        </p>
        <p>
          The system has unit tests set up to ensure that the code works as expected and user inputs do not cause issues.
        </p>
        <h3>Features</h3>
        <p>
          The Timetable system is designed for two types of user; the teacher and the admin. Teachers can view their
          timetables and change the rooms they teach in depending on room availability and if the room is assigned to
          their subject. They can also message admins for support in case they need free periods changed. Teachers can
          change their own passwords.
        </p>
        <p>
          Admins can manage users and their details, edit timetables, delete users, add/edit/delete rooms, contact
          teachers and reply to support messages and change if user accounts are admins or not.
        </p>
      </section>
      <Gallery images={"Timetable"}/>
    </div>
  )
}

export default Timetable
