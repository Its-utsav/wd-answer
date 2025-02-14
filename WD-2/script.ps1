# Get a list of the folders q1 to q19
$folders = 1..20 | ForEach-Object { "q$_" }

# Iterate through each folder
foreach ($folder in $folders) {
  # Construct the source and destination paths
  $sourcePath = ".\$folder"
  $destinationPath = "..\..\$folder"

  # Check if the destination folder exists. If not, create it.  This is important!
  if (!(Test-Path -Path $destinationPath -PathType Container)) {
    New-Item -ItemType Directory -Path $destinationPath | Out-Null # Suppress output if you don't want it
    Write-Host "Created destination folder: $destinationPath" # Optional: Informative message
  }


  # Get all items within the source folder (files and subfolders)
  $items = Get-ChildItem -Path $sourcePath -Recurse # -Recurse copies subfolders too

  # Copy each item to the destination folder
  foreach ($item in $items) {
    try {
    #   Copy-Item -Path $item.FullName -Destination $destinationPath -Force -WhatIf # Use -WhatIf first for testing

      # Remove -WhatIf for actual copying
      Copy-Item -Path $item.FullName -Destination $destinationPath -Force 

      Write-Host "Copied: $($item.FullName) to $destinationPath" # Optional: Confirmation message
    }
    catch {
      Write-Error "Error copying $($item.FullName): $_"
    }
  }
}

Write-Host "Copying complete."