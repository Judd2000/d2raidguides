import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        const extractedError = {
        message: error?.message || error?.toString(),
        name: error?.name,
        stack: error?.stack,
        ...(error instanceof Object ? error : {})
        };

        console.error('ANGULAR_ERROR_DETAILED:', JSON.stringify(extractedError, null, 2));
    }
}