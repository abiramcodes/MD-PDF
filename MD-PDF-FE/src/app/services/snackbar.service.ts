import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);

  public openSnackbar(message: string, action?: string): void {
    this.snackbar.open(message, action ?? "Cool", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}
