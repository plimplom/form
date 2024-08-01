import {Box, Button, Paper, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useState} from "react";
import {DummyFormDataInputDisplay} from "./DummyFormDataInputDisplay.tsx";
import {FachkompetenzKriterien} from "./data/FachKomp.ts";
import {MethodenkompetenzKriterien} from "./data/MethKomp.ts";

export const DummyForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  return <>
    <Box>
      <Typography>Bewertungsbogenname</Typography>
      <Paper>
        <Stepper activeStep={currentStep}>
          <Step><StepLabel>FackKomp</StepLabel></Step>
          <Step><StepLabel>MethKomp</StepLabel></Step>
        </Stepper>
        <DummyFormDataInputDisplay currentStep={currentStep} step={0} data={FachkompetenzKriterien}/>
        <DummyFormDataInputDisplay currentStep={currentStep} step={1} data={MethodenkompetenzKriterien}/>
        {currentStep > 0 && <Button onClick={() => setCurrentStep((oldStep) => oldStep - 1)} disabled={currentStep <= 0}>Zurück</Button>}
        {currentStep < 1 && <Button onClick={() => setCurrentStep((oldStep) => oldStep + 1)} disabled={currentStep >= 4}>Weiter</Button>}
      </Paper>
    </Box>

  </>
}