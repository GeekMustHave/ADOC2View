<#
             _____     ____     _____   ___   __      __  _                   
     /\     |  __ \   / __ \   / ____| |__ \  \ \    / / (_)                  
    /  \    | |  | | | |  | | | |         ) |  \ \  / /   _    ___  __      __
   / /\ \   | |  | | | |  | | | |        / /    \ \/ /   | |  / _ \ \ \ /\ / /
  / ____ \  | |__| | | |__| | | |____   / /_     \  /    | | |  __/  \ V  V / 
 /_/    \_\ |_____/   \____/   \_____| |____|     \/     |_|  \___|   \_/\_/  
                                                                              
                                                                              
    Author: Phoenix Learning Labs
            John Schuster      
    File: gen-doco
    Type: Powershell document generator 
    License: Open Source MIT
    Description:  This script generates the ASCIIDoctor HTML and PDF files
    Special Notes: ASCIIDoctor and ASCIIDcotor-PDF must be installed
                   These are both Ruby GEMs
=========================================================================================================
#>

Clear-Host
write-host "ADOC2View Generator" -ForegroundColor Yellow
$FileName = "readme"
write-host "Generating $fileName.HTML..." -ForegroundColor Cyan
$command = "asciidoctor $fileName.adoc"
Invoke-Expression $command 
write-host "Generating $fileName.PDF..." -ForegroundColor Cyan
$command = "asciidoctor-pdf $fileName.adoc"
Invoke-Expression $command 
write-host "Generation of documents completed." -ForegroundColor Yellow
pause



<#
Script History

   Date      Ver     Author Description
========== ======= ======== ==========================================================  
03/06/2019  V2.1c    JHRS   Copied for use in distribution doco 
02/23/2019  V2.1b    JHRS   Initial version of script, fixed fileNamePrefix

#>