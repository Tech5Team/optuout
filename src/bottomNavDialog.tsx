import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

const privacystatement = (
    <div>
<Typography fontWeight={'bold'} variant="h6">I. INTRODUCTION:</Typography>
<Typography sx={{m: 2}} variant="body1">
Tech5 is committed to protecting your data and privacy. We will not retain or
disclose any personal information to any third parties.
</Typography>
<Typography fontWeight={'bold'} variant="h6">II. PERSONAL INFORMATION:</Typography>
<Typography sx={{m: 2}}  variant="body1">
Opt-U-Out may collect and utilize personal information, including full names,
email addresses, home addresses, and phone numbers, in addition to gathering IP
addresses and geolocation data.
</Typography>
<Typography fontWeight={'bold'} variant="h6">III. USE OF & DISCLOSURE OF PERSONAL INFORMATION:</Typography>
<Typography sx={{m: 2}}  variant="body1">
Opt-U-Out leverages the data you provide us to conduct an extensive search of
online directories to identify and facilitate the removal of your publicly available
information. We do not retain any of your personal information for greater than a
period of 30 days, and we refrain from utilizing your information beyond the
scope of assisting you in the opt-out process.
</Typography>
<Typography fontWeight={'bold'} variant="h6">IV. COOKIES & TRACKING TECHNOLOGIES:</Typography>
<Typography sx={{m: 2}} variant="body1">
Opt-U-Out uses standard cookie policies and geolocation data to improve the user
experience and functionality of the tool. These features help to further streamline
and assist the user throughout the process.
</Typography>
<Typography fontWeight={'bold'} variant="h6">V. USER RIGHTS:</Typography>
<Typography sx={{m: 2}} variant="body1">
As a user, you are entitled to be informed about the use of your personal
information collected, the purpose for which it was collected, and how it’s being
used. You also have the right to request access, change, remove, or request a copy
of your data. Any questions regarding the use of or access to your data should be
sent to the tech5 contact email, {<a  href="mailto:tech5team@proton.me" >tech5team@proton.me</a>}.
</Typography>
<Typography fontWeight={'bold'} variant="h6">VI. CHANGES TO PRIVACY STATEMENT:</Typography>
<Typography sx={{m: 2}} variant="body1">
Tech5 reserves the right to update and modify the privacy statement at any time.
Any modifications that are made will be posted on this page along with a revised
date of change. Continual use of the tool implies that you have read and agreed
upon the revised privacy statement. If any changes are made that impact your
rights regarding your personal data, we will do our best to inform you by posting
a notice on our website or by email.
</Typography>
<Typography fontWeight={'bold'} variant="h6">VII. CONTACT INFORMATION:</Typography>
<Typography sx={{m: 2}}variant="body1">
Any questions or concerns regarding Opt-U-Out, or our privacy statement can be
sent to {<a  href="mailto:tech5team@proton.me" >tech5team@proton.me</a>}. We are committed to reviewing and responding to
emails in a timely manner.
</Typography>

    </div>
)
interface FullScreenDialogProps {
    open: boolean;
    contact: boolean;
    setOpen: () => void;
  }
export default function BottomDialog({ contact, open, setOpen }:FullScreenDialogProps ){
  
    const handleClose = () => {
    setOpen();
  };

  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth = "md"
      sx ={{maxWidth: 750, marginLeft:'auto', marginRight:'auto'}}
    >
      <DialogTitle id="alert-dialog-title">{contact? "Contact Us" : "Privacy Policy"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {contact?  <a  href="mailto:tech5team@proton.me" >tech5team@proton.me</a>  : privacystatement}
</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
