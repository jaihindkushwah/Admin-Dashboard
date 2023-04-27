import { tokens } from "../../theme"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary  from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import  {Box , Typography, useTheme} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'




const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return(
        <Box m='20px'>
            <Header title={'FAQ Page'} subtitle={'Frequently Asked Questions Page'} />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos voluptates odio dolorem blanditiis autem impedit soluta rem ipsum reiciendis, inventore placeat,
                         eos repellat distinctio quos similique animi facere accusantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )

}
export default FAQ;