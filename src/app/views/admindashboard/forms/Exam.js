import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "../../../../app/components";
import axios from "axios";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  MenuItem,
  DialogTitle,
  RadioGroup,
  styled,
} from "@mui/material";
import useFetch from "../../../../hooks/useFetch";
import { Span } from "../../../../app/components/Typography";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { SessionContext } from "../../../components/MatxLayout/Layout1/SessionContext";



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const Exam = () => {
  const { currentSession } = useContext(SessionContext);

  const {
    data:classData,
    loading: classLoading,
    error: classError,
  } = useFetch(
      currentSession ? `/class/${currentSession._id}` : null      
    );
    console.log(classData)
    const { data: examData } = useFetch(
      currentSession ? `/getofflineexam/${currentSession._id}` : null
    );
    console.log(examData)
  const [subjectData, setSubjectData] = useState([]);
  console.log("sub",subjectData)
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExam, setSelectedExam] = useState("");

  const [studentData, setStudentData] = useState([]);
  console.log("Current studentData state:", studentData);
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const [subjectIdLookup, setSubjectIdLookup] = useState({});
  const [showMarkManagement, setShowMarkManagement] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  // const gradeDefinitions = [
  //   { markfrom: 80, markupto: 100, comment: "Excellent" },
  //   { markfrom: 70, markupto: 79, comment: "Very Good" },
  //   { markfrom: 60, markupto: 69, comment: "Good" },
  //   { markfrom: 55, markupto: 59, comment: "Fairly Good" },
  //   { markfrom: 0, markupto: 49, comment: "Poor" },
  // ];

  const gradeDefinitions = [
    { markfrom: 70, markupto: 100, comment: "Excellent", grade: "A" },
    { markfrom: 60, markupto: 69, comment: "Very Good", grade: "B" },
    { markfrom: 50, markupto: 59, comment: "Good", grade: "C" },
    { markfrom: 45, markupto: 49, comment: "Fairly Good", grade: "D" },
    { markfrom: 40, markupto: 44, comment: "Poor", grade: "E" },
    { markfrom: 0, markupto: 39, comment: "Poor", grade: "F" },
  ];
  const fetchStudentData = async (examId, subjectId) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      const response = await fetch(
        `${apiUrl}/api/get-all-scores/${examId}/${subjectId}`,
        {
          headers,
        }
      );

      if (!response.ok) {
        console.error(
          "Failed to fetch student data. Response details:",
          response
        );
        throw new Error("Failed to fetch student data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching student data:", error);
      return { scores: [] }; // Return empty array if there's an error
    }
  };

  const handleManageMarkClick = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      const response = await fetch(`${apiUrl}/api/student/${selectedClass}/${currentSession._id}`, {
        headers,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }

      const students = await response.json();

      // Handle the case where no students are found
      if (students.length === 0) {
        console.warn("No students found for the selected class.");
        // Proceed with the logic for initializing the state, etc.
        // You might want to show a message to the user or take appropriate action.
      } else {
        // Assuming you want to pick the first student for now
        const firstStudentId = students[0]._id;
        setSelectedStudentId(firstStudentId);

        const existingData = await fetchStudentData(
          selectedExam,
          subjectIdLookup[selectedSubject]
        );

        console.log("Response from fetchStudentData:", existingData);
        console.log("Existing scores:", existingData.scores);

        // Ensure that the scores are properly set in the initial state
        const initialState = students.map((student) => {
          const studentScore = existingData.scores.find(
            (score) => score.studentId && score.studentId._id === student._id
          );

          console.log(`Student ${student._id} - Existing Score:`, studentScore);

          const defaultTestScore = studentScore
            ? studentScore.testscore !== undefined
              ? studentScore.testscore
              : 0
            : 0;

          const defaultExamScore = studentScore
            ? studentScore.examscore !== undefined
              ? studentScore.examscore
              : 0
            : 0;

          return {
            studentId: student._id,
            studentName: student.studentName,
            AdmNo: student.AdmNo, // Include AdmNo
            testscore: defaultTestScore,
            examscore: defaultExamScore,
            marksObtained: defaultTestScore + defaultExamScore,
            comment: studentScore ? studentScore.comment || "" : "",
          };
        });

        console.log("Initial state:", initialState);

        setStudentData(initialState);
        setShowMarkManagement(true);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  console.log("selectedclass: ", selectedClass)

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        if (!selectedClass) {
          setSubjectData([]);
          setSubjectIdLookup({});
          return;
        }

        const token = localStorage.getItem("jwtToken");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);

        const response = await fetch(
          `${apiUrl}/api/get-subject/${selectedClass}/${currentSession._id}`,
          {
            headers,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch subjects");
        }

        const data = await response.json();

        setSubjectData(data);

        // Create a subjectId lookup
        const lookup = {};
        data.forEach((subject) => {
          lookup[subject.name] = subject._id;
        });
        setSubjectIdLookup(lookup);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    // Call the fetchSubjectData function
    fetchSubjectData();
  }, [selectedClass, apiUrl]); // Include all dependencies used inside the useEffect

  const handleClassChange = (event) => {
    const newSelectedClass = event.target.value;
    setSelectedClass(newSelectedClass);
    setSelectedSubject("");
  };

  const handleExamChange = (event) => {
    const selectedExamId = event.target.value;
    setSelectedExam(selectedExamId);
  };
  const getExamNameById = (examId) => {
    const selectedExam = examData.find((item) => item._id === examId);
    return selectedExam ? selectedExam.name : "";
  };

  const getClassById = (classId) => {
    const selectedClass = classData.find((item) => item.id === classId);
    return selectedClass ? selectedClass.name : "";
  };

  const getSubjectById = (subjectId) => {
    const selectedSubject = subjectData.find((item) => item._id === subjectId);
    return selectedSubject ? selectedSubject.name : "";
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      const marks = studentData.map((student) => {
        const {
          studentId,
          testscore = 0,
          examscore = 0,
          comment = "",
        } = student;
        const marksObtained = testscore + examscore;

        return {
          studentId,
          subjectId: subjectIdLookup[selectedSubject],
          testscore,
          examscore,
          marksObtained,
          comment,
        };
      });

      console.log("Updated Marks:", marks);

      const token = localStorage.getItem("jwtToken");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      // Check if there are existing marks by verifying the examId and subjectId
      if (selectedExam && subjectIdLookup[selectedSubject]) {
        const responseCheckMarks = await fetch(
          `${apiUrl}/api/get-all-scores/${selectedExam}/${subjectIdLookup[selectedSubject]}`,
          {
            headers,
          }
        );

        console.log("Response from Check Marks:", responseCheckMarks);

        if (responseCheckMarks.ok) {
          const responseData = await responseCheckMarks.json();
          const existingMarks = responseData.scores || [];

          // Check if there are existing marks
          if (existingMarks.length > 0) {
            // Existing marks found, proceed with updating
            const responseUpdateMarks = await fetch(
              `${apiUrl}/api/update-all-marks`,
              {
                method: "PUT",
                headers: {
                  ...headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  examId: selectedExam,
                  subjectId: subjectIdLookup[selectedSubject],
                  updates: marks,
                }),
              }
            );

            console.log("Request Payload:", {
              examId: selectedExam,
              subjectId: subjectIdLookup[selectedSubject],
              updates: marks,
            });

            console.log("Response from Update Marks:", responseUpdateMarks);

            if (!responseUpdateMarks.ok) {
              const errorMessage = await responseUpdateMarks.text();
              console.error(
                `Failed to update marks. Server response: ${errorMessage}`
              );
              throw new Error("Failed to update marks");
            } else {
              // Notify success using toast
              toast.success("Marks updated successfully!");
            }
          } else {
            // No existing marks found, proceed to create new marks
            const responseSaveMarks = await fetch(`${apiUrl}/api/save-marks/${currentSession._id}`, {
              method: "POST",
              headers: {
                ...headers, 
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                examId: selectedExam,
                subjectId: subjectIdLookup[selectedSubject],
                updates: marks,
                session: currentSession._id
              }),
            });

            console.log("Response from Save Marks:", responseSaveMarks);

            if (!responseSaveMarks.ok) {
              const errorMessage = await responseSaveMarks.text();

              console.error(
                `Failed to save marks. Server response: ${errorMessage}`
              );
              throw new Error("Failed to save marks");
            } else {
              // Notify success using toast
              toast.success("Marks saved successfully!");
            }
          }
        } else {
          // Handle other response statuses
          // ...
        }
      }
      // ... (remaining code)
    } catch (error) {
      console.error("Error saving marks:", error);
      // ... (error handling)
    }
  };

  // const handleScoreChange = (index, scoreType, value) => {
  //   // Assuming studentData is an array
  //   const updatedStudents = [...studentData];

  //   // Update the corresponding score
  //   if (scoreType === "testscore") {
  //     updatedStudents[index].testscore = parseInt(value, 10) || 0;
  //   } else if (scoreType === "examscore") {
  //     updatedStudents[index].examscore = parseInt(value, 10) || 0;
  //   } else if (scoreType === "comment") {
  //     updatedStudents[index].comment = value; // Update the comment field
  //   }

  //   // Update marksObtained by adding test score and exam score
  //   updatedStudents[index].marksObtained =
  //     (updatedStudents[index].testscore || 0) +
  //     (updatedStudents[index].examscore || 0);

  //   // Update state with the modified students
  //   setStudentData(updatedStudents);
  // };
  const handleScoreChange = (index, scoreType, value) => {
    // Assuming studentData is an array
    const updatedStudents = [...studentData];

    // Update the corresponding score
    if (scoreType === "testscore") {
      updatedStudents[index].testscore = parseInt(value, 10) || 0;
    } else if (scoreType === "examscore") {
      updatedStudents[index].examscore = parseInt(value, 10) || 0;
    } else if (scoreType === "comment") {
      updatedStudents[index].comment = value; // Update the comment field
    }

    // Update marksObtained by adding test score and exam score
    updatedStudents[index].marksObtained =
      (updatedStudents[index].testscore || 0) +
      (updatedStudents[index].examscore || 0);

    // Calculate comment based on marks obtained and grade definitions
    const comment = calculateComment(
      updatedStudents[index].marksObtained,
      gradeDefinitions
    );

    // Update the comment field
    updatedStudents[index].comment = comment;

    // Update state with the modified students
    setStudentData(updatedStudents);
  };

  const calculateComment = (marksObtained, gradeDefinitions) => {
    console.log("Calculating Comment for Marks:", marksObtained);

    // Find the corresponding grade based on marksObtained
    const matchingGrade = gradeDefinitions.find((grade) => {
      console.log(
        "Checking Grade:",
        grade.markfrom,
        grade.markupto,
        marksObtained,
        parseFloat(grade.markfrom),
        parseFloat(grade.markupto),
        parseFloat(marksObtained)
      );

      return (
        marksObtained >= parseFloat(grade.markfrom) &&
        marksObtained <= parseFloat(grade.markupto)
      );
    });

    console.log("Matching Grade:", matchingGrade);

    // Return the comment if a matching grade is found
    return matchingGrade ? matchingGrade.comment : "-";
  };

  return (
    <div>
      <Container>
        <ValidatorForm onError={() => null}>
          <Box className="breadcrumb">
            <Breadcrumb routeSegments={[{ name: "Manage Exam Mark" }]} />
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <TextField
                select
                label="Select an Exam"
                variant="outlined"
                value={selectedExam}
                onChange={handleExamChange}
              >
                {examData &&
                  examData.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label="Select a class"
                variant="outlined"
                value={selectedClass}
                onChange={handleClassChange}
              >
                {classData &&
                  classData.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label="Select the subject"
                variant="outlined"
                value={selectedSubject}
                onChange={handleSubjectChange}
              >
                {subjectData &&
                  subjectData.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleManageMarkClick}
              >
                Manage Mark
              </Button>
            </Grid>
          </Grid>

          {showMarkManagement && (
            <>
              <div className="col-sm-4">
                <div className="tile-stats tile-gray">
                  <div className="icon">
                    <i className="entypo-chart-bar"></i>
                  </div>
                  <h3 style={{ color: "#696969" }}>
                    Marks For: {getExamNameById(selectedExam)}
                  </h3>

                  <h4 style={{ color: "#696969" }}>Class: {selectedClass}</h4>
                  <h4 style={{ color: "#696969" }}>
                    Subject: {getSubjectById(subjectIdLookup[selectedSubject])}
                  </h4>
                </div>
              </div>
              <div class="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
                <div class="table-responsive full-data">
                  <table
                    class="table-responsive-lg table display dataTablesCard student-tab dataTable no-footer"
                    id="example-student"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Adm No</th>
                        <th>Name</th>
                        <th>Test</th>
                        <th>Exam</th>
                        <th>Marks Obtained</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.map((student, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{student.AdmNo}</td>

                          {/*}  <td id={`subjectId_${index}`} style={{ display: "none" }}>
                        {subjectIdLookup[student.subjectName]}
                  </td>*/}
                          <td>{student.studentName}</td>

                          <td>
                            <TextField
                              type="number"
                              name={`testscore_${index}`}
                              id={`testscore_${index}`}
                              value={student.testscore || ""}
                              onChange={(e) =>
                                handleScoreChange(
                                  index,
                                  "testscore",
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              type="number"
                              name={`examscore_${index}`}
                              id={`examscore_${index}`}
                              value={student.examscore || ""}
                              onChange={(e) =>
                                handleScoreChange(
                                  index,
                                  "examscore",
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          {/* Fix the nesting issue for marksObtained */}
                          <td>{student.marksObtained || ""}</td>
                          {/*} <td>
                        <TextField
                          name={`comment_${index}`}
                          id={`comment_${index}`}
                          value={student.comment || ""}
                          onChange={(e) =>
                            handleScoreChange(index, "comment", e.target.value)
                          }
                        />
                        </td>*/}

                          <td style={{ color: "black", fontWeight: "800" }}>
                            <TextField
                              name={`comment_${index}`}
                              id={`comment_${index}`}
                              value={
                                student.marksObtained
                                  ? calculateComment(
                                      student.marksObtained,
                                      gradeDefinitions
                                    ) || "-"
                                  : "" // Show an empty string if marksObtained is not available
                              }
                              disabled // To make it read-only
                              style={{ color: "black", fontWeight: "800" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <Button
                color="primary"
                variant="contained"
                type="button"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </>
          )}
        </ValidatorForm>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Exam;
