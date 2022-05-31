const router = require("express").Router();

const footballTeams = [
  {
    teamName: "Stade Rennais",
    championship: "Ligue 1",
    strikers: ["Terrier", "Guirassy", "Laborde"],
    midfielders: ["Majer", "Bourigeaud", "Tait"],
    defenders: ["Aguerd", "Traore", "Omari"],
  },
  {
    teamName: "PSG",
    championship: "Ligue 1",
    strikers: ["Mbappe", "Neymar", "Icardi"],
    midfielders: ["Messi", "Gueye", "Verrati"],
    defenders: ["Hakimi", "Marquinhos", "Mendes"],
  },
];

// GET - Return a list of all students
router.get("/", (request, response) => {
  response.json({
    footballTeams: footballTeams,
  });
});

// ROUTE PARAMETER -> GET football-team/name
router.use("/:name", (request, response, next) => {
  const name = request.params.name;
  const footballTeam = footballTeams.find((team) => team.teamName === name);

  if (!footballTeam) {
    // next();
    // response.status(404).json({
    //   message: `Could not find student with name ${name}`,
    // })
    return;
  }

  response.json(footballTeam);
});

// POST / Football-Team
router.post("/", (request, response) => {
  footballTeams.push(request.body);

  response.status(201).json({
    message: "message received!",
    body: request.body,

    //   // data validation that request.body is in the correct format
    // // - name
    // // - grade
    // if (!student.name || typeof student.name !== "string") {
    //   response.status(400).json({
    //     message: "Student name not provided",
    //   });
    //   return;
    // }

    // if (
    //   !student.grade ||
    //   !validGrades.some((x) => areSameWithoutAccentsOrCase(x, student.grade))
    // ) {
    //   response.status(400).json({
    //     message: `Grade is not valid. Please choose from: ${validGrades.join(
    //       ", "
    //     )}`,
    //   });
    //   return;
    // }
  });
});

module.exports = router;
