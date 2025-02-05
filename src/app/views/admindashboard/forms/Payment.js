// import {} from "@mui/material";
// import { Fragment, React, useState, useEffect, useContext } from "react";
// import { Box } from "@mui/system";
// import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import the MoreVert icon

// import {
//   Card,
//   Button,
//   Grid,
//   styled,
//   useTheme,
//   Icon,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   ListItemIcon,
//   MenuItem,
//   Menu,
// } from "@mui/material";
// import RowCards from "../shared/RowCards";
// import { Breadcrumb } from "../../../../app/components";
// import EditIcon from "@mui/icons-material/Edit"; // Import the Edit icon
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Link } from "react-router-dom";

// import useFetch from "../../../../hooks/useFetch";
// import { SessionContext } from "../../../components/MatxLayout/Layout1/SessionContext";

// const ContentBox = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
// }));

// const Title = styled("span")(() => ({
//   fontSize: "1rem",
//   fontWeight: "500",
//   marginRight: ".5rem",
//   textTransform: "capitalize",
// }));

// const SubTitle = styled("span")(({ theme }) => ({
//   fontSize: "0.875rem",
//   color: theme.palette.text.secondary,
// }));

// const H4 = styled("h4")(({ theme }) => ({
//   fontSize: "1rem",
//   fontWeight: "500",
//   marginBottom: "16px",
//   textTransform: "capitalize",
//   color: theme.palette.text.secondary,
// }));
// const StyledTable = styled(Table)(() => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(1),
// }));

// const Payments = () => {
//   const { currentSession } = useContext(SessionContext);

//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   const { data, loading, fetchedData, error, reFetch } = useFetch(
//     currentSession ? `/receipt-session/${currentSession._id}` : null
//   );

//   console.log(data);
//   const [anchorElMap, setAnchorElMap] = useState({});

//   const { palette } = useTheme();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [balances, setBalances] = useState([]);
//   const [editStudentData, setEditStudentData] = useState(null);

//   const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   useEffect(() => {
//     if (data) {
//       const balancesArray = data.map((item) => item.amount - item.paid);
//       setBalances(balancesArray);
//     }
//   }, [data]);
//   const handleChangePage = (_, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleOpenMenu = (event, examId) => {
//     setAnchorElMap((prev) => ({
//       ...prev,
//       [examId]: event.currentTarget,
//     }));
//   };
//   // Function to handle closing the context menu for a specific exam
//   const handleCloseMenu = (examId) => {
//     setAnchorElMap((prev) => ({
//       ...prev,
//       [examId]: null,
//     }));
//   };
//   const handleOpenDeleteConfirmation = (user) => {
//     setUserToDelete(user);
//     setDeleteConfirmationOpen(true);
//   };

//   const handleCloseDeleteConfirmation = () => {
//     setUserToDelete(null);
//     setDeleteConfirmationOpen(false);
//   };

//   return (
//     <Fragment>
//       <ContentBox className="analytics">
//         <Box className="breadcrumb">
//           <Breadcrumb routeSegments={[{ name: "Payment" }]} />
//           {/* <FormDialog4 /> */}
//         </Box>

//         <Box width="100%" overflow="auto">
//           <StyledTable>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">S/N</TableCell>
//                 <TableCell align="left">Student Name</TableCell>
//                 <TableCell align="center">Total Fees</TableCell>
//                 <TableCell align="center">Amount Paid</TableCell>
//                 <TableCell align="center">Reason</TableCell>
//                 <TableCell align="center">Date</TableCell>
//                 <TableCell align="center">Balance</TableCell>
//                 <TableCell align="center">Status</TableCell>
//                 <TableCell align="right">Action</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {data &&
//                 data.map((item, index) => {
//                   const amount = item.amount
//                     ? parseFloat(item.amount.replace(/[^\d.-]/g, ""))
//                     : NaN;
//                   const paid = item.paid
//                     ? parseFloat(item.paid.replace(/[^\d.-]/g, ""))
//                     : NaN;
//                   console.log("Amount:", amount);
//                   console.log("Paid:", paid);
//                   const balance =
//                     isNaN(amount) || isNaN(paid)
//                       ? "Invalid Data"
//                       : amount - paid;
//                   console.log("Balance:", balance);

//                   return (
//                     <TableRow key={item._id}>
//                       <TableCell align="center">{index + 1}</TableCell>
//                       <TableCell align="left">{item.studentName}</TableCell>
//                       <TableCell align="center">{item.amount}</TableCell>
//                       <TableCell align="center">{item.paid}</TableCell>
//                       <TableCell align="center">{item.reason}</TableCell>
//                       <TableCell>
//                         {item.date
//                           ? new Date(item.date).toLocaleDateString()
//                           : ""}
//                       </TableCell>
//                       <TableCell align="center">{balance}</TableCell>
//                       <TableCell align="center">{item.status}</TableCell>

//                       <TableCell align="right">
//                         <IconButton
//                           aria-controls={`action-menu-${item._id}`}
//                           aria-haspopup="true"
//                           onClick={(event) => handleOpenMenu(event, item._id)} // Pass item._id
//                         >
//                           <MoreVertIcon /> {/* MoreVertIcon for the menu */}
//                         </IconButton>
//                         <Menu
//                           id={`action-menu-${item._id}`}
//                           anchorEl={anchorElMap[item._id]}
//                           open={Boolean(anchorElMap[item._id])}
//                           onClose={() => handleCloseMenu(item._id)}
//                         >
//                           <MenuItem>
//                             <ListItemIcon></ListItemIcon>
//                             <Link to={`/dashboard/view-receipt/${item._id}`}>
//                               View Receipt
//                             </Link>
//                           </MenuItem>
//                           <MenuItem>
//                             <ListItemIcon></ListItemIcon>

//                             <Link to="/dashboard/profile">Student Profile</Link>
//                           </MenuItem>
//                           <MenuItem>
//                             <ListItemIcon>
//                               <EditIcon /> {/* Use an Edit icon */}
//                             </ListItemIcon>
//                             Edit
//                           </MenuItem>
//                           <MenuItem
//                             onClick={() => handleOpenDeleteConfirmation(item)}
//                           >
//                             <ListItemIcon>
//                               <DeleteIcon />
//                             </ListItemIcon>
//                             Delete
//                           </MenuItem>
//                         </Menu>
//                       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </StyledTable>

//           <TablePagination
//             sx={{ px: 2 }}
//             page={page}
//             component="div"
//             rowsPerPage={rowsPerPage}
//             count={data ? data.length : 0}
//             onPageChange={handleChangePage}
//             rowsPerPageOptions={[5, 10, 25]}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             nextIconButtonProps={{ "aria-label": "Next Page" }}
//             backIconButtonProps={{ "aria-label": "Previous Page" }}
//           />
//         </Box>

//         {/* <TopSellingTable />
//             <StatCards2 />

//             <H4>Ongoing Projects</H4>
//             <RowCards />
//           </Grid>

//           <Grid item lg={4} md={4} sm={12} xs={12}>
//             <Card sx={{ px: 3, py: 2, mb: 3 }}>
//               <Title>Traffic Sources</Title>
//               <SubTitle>Last 30 days</SubTitle>

//               <DoughnutChart
//                 height="300px"
//                 color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
//               />
//             </Card>

//             <UpgradeCard />
//             <Campaigns />*/}
//       </ContentBox>
//     </Fragment>
//   );
// };

// export default Payments;
import {} from "@mui/material";
import { Fragment, React, useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import the MoreVert icon

import {
  Card,
  Button,
  Grid,
  styled,
  useTheme,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  ListItemIcon,
  MenuItem,
  Menu,
} from "@mui/material";
import RowCards from "../shared/RowCards";
import { Breadcrumb } from "../../../../app/components";
import EditIcon from "@mui/icons-material/Edit"; // Import the Edit icon
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import useFetch from "../../../../hooks/useFetch";
import { SessionContext } from "../../../components/MatxLayout/Layout1/SessionContext";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Payments = () => {
  const { currentSession } = useContext(SessionContext);

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const { data, loading, fetchedData, error, reFetch } = useFetch(
    currentSession ? `/receipt-session/${currentSession._id}` : null
  );

  console.log("this is date", data);
  const [anchorElMap, setAnchorElMap] = useState({});

  const { palette } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [balances, setBalances] = useState([]);
  const [editStudentData, setEditStudentData] = useState(null);

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      if (currentSession && data) {
        const classSet = new Set(data.map((item) => item.classname));
        const studentData = [];

        for (const className of classSet) {
          const res = await fetch(
            `http://localhost:8800/api/students/${currentSession._id}/${className}`
          );
          const classStudents = await res.json();
          studentData.push(...classStudents);
        }

        setStudents(studentData);
      }
    };

    fetchStudents();
  }, [currentSession, data]);

  const getStudentId = (studentName) => {
    console.log("Searching for student name:", studentName);
    console.log("Available students:", students);

    const student = students.find((s) => s.studentName === studentName); // Changed from s.name to s.studentName

    if (student) {
      console.log("Match found:", student);
      return student._id;
    } else {
      console.log("No match found for:", studentName);
      return "N/A";
    }
  };

  useEffect(() => {
    if (data) {
      const balancesArray = data.map((item) => item.amount - item.paid);
      setBalances(balancesArray);
    }
  }, [data]);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleOpenMenu = (event, examId) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [examId]: event.currentTarget,
    }));
  };
  // Function to handle closing the context menu for a specific exam
  const handleCloseMenu = (examId) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [examId]: null,
    }));
  };
  const handleOpenDeleteConfirmation = (user) => {
    setUserToDelete(user);
    setDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setUserToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Payment" }]} />
          {/* <FormDialog4 /> */}
        </Box>

        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="center">S/N</TableCell>
                <TableCell align="left">Student Name</TableCell>
                <TableCell align="center">Total Fees</TableCell>
                <TableCell align="center">Amount Paid</TableCell>
                <TableCell align="center">Reason</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Balance</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data &&
                data.map((item, index) => {
                  const amount = item.amount
                    ? parseFloat(item.amount.replace(/[^\d.-]/g, ""))
                    : NaN;
                  const paid = item.paid
                    ? parseFloat(item.paid.replace(/[^\d.-]/g, ""))
                    : NaN;
                  console.log("Amount:", amount);
                  console.log("Paid:", paid);
                  const balance =
                    isNaN(amount) || isNaN(paid)
                      ? "Invalid Data"
                      : amount - paid;
                  console.log("Balance:", balance);

                  return (
                    <TableRow key={item._id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="left">{item.studentName}</TableCell>
                      <TableCell align="center">{item.amount}</TableCell>
                      <TableCell align="center">{item.paid}</TableCell>
                      <TableCell align="center">{item.reason}</TableCell>
                      <TableCell>
                        {item.date
                          ? new Date(item.date).toLocaleDateString()
                          : ""}
                      </TableCell>
                      <TableCell align="center">{balance}</TableCell>
                      <TableCell align="center">{item.status}</TableCell>

                      <TableCell align="right">
                        <IconButton
                          aria-controls={`action-menu-${item._id}`}
                          aria-haspopup="true"
                          onClick={(event) => handleOpenMenu(event, item._id)} // Pass item._id
                        >
                          <MoreVertIcon /> {/* MoreVertIcon for the menu */}
                        </IconButton>
                        <Menu
                          id={`action-menu-${item._id}`}
                          anchorEl={anchorElMap[item._id]}
                          open={Boolean(anchorElMap[item._id])}
                          onClose={() => handleCloseMenu(item._id)}
                        >
                          <MenuItem>
                            <ListItemIcon></ListItemIcon>
                            <Link
                              to={`/dashboard/view-receipt/${getStudentId(
                                item.studentName
                              )}`}
                            >
                              View Receipt
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <ListItemIcon></ListItemIcon>

                            <Link to="/dashboard/profile">Student Profile</Link>
                          </MenuItem>
                          <MenuItem>
                            <ListItemIcon>
                              <EditIcon /> {/* Use an Edit icon */}
                            </ListItemIcon>
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleOpenDeleteConfirmation(item)}
                          >
                            <ListItemIcon>
                              <DeleteIcon />
                            </ListItemIcon>
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={data ? data.length : 0}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>

        {/* <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />*/}
      </ContentBox>
    </Fragment>
  );
};

export default Payments;
