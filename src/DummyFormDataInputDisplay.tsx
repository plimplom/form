import React, {FC, useState} from "react";
import {
  AccordionSummary, Chip,
  Divider,
  List,
  ListItem,
  Paper, Radio, styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField, Tooltip,
  Typography
} from "@mui/material";
import {FachkompetenzKriterien, IKriterien} from "./data/FachKomp.ts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiTableCell from "@mui/material/TableCell";

interface Props {
  currentStep: number,
  step: number,
}

const radios=[1,2,3,4,5]

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({_}) => ({
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const TableCell = styled(MuiTableCell)(({_}) => ({
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 4,
  paddingRight: 4
}));


function Content(colIndex: number, row: IKriterien) {
  return <TableCell key={colIndex} align="center">
    <Radio/>
    {row.help.some(value => value.atRating === colIndex) &&
        <>
          <Tooltip title={row.help.find(value => value.atRating === colIndex)?.description}>
            <Chip label={"Beschreibung"}/>
          </Tooltip>
          {row.help.find(value => value.atRating === colIndex)?.example &&
              <Tooltip title={row.help.find(value => value.atRating === colIndex)?.example}>
                <Chip label={"Beispiel"}/>
              </Tooltip>
          }
        </>
    }
  </TableCell>
}

export const DummyFormDataInputDisplay: FC<Props> = ({currentStep,step}) => {
  const [expanded, setExpanded] = useState<number | false>(0)

  const handleChange = (panel: number) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data=FachkompetenzKriterien
  return <>
    <div hidden={step !== currentStep}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Kriterium</TableCell>
              {[...radios].map((value) => (<TableCell align={"center"}>{value}</TableCell>))}
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Kommentar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell id={row.name}>
                    <Typography variant={"subtitle1"} gutterBottom>{row.name}</Typography>
                    <Typography variant={"caption"} display="block" gutterBottom>{row.description}</Typography>
                    {row.assessmentPoints.length > 0 &&
                        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            Bewertungspunkte
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              {row.assessmentPoints.map((value, index) => (<>
                                <ListItem style={{paddingTop: 2, paddingBottom: 2, paddingLeft: 8, paddingRight: 8}}><Typography
                                    sx={{textWrap: "pretty"}}>{value}</Typography></ListItem>{index + 1 < row.assessmentPoints.length &&
                                  <Divider/>}</>))}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                    }
                  </TableCell>
                  {[...radios, radios.length + 1].map((colIndex) => (Content(colIndex, row)))}
                  <TableCell>
                    <TextField
                        variant="outlined"
                        size="small"/>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </>
}