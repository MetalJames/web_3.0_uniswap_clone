export const isOperationPending = (operationState) => 
    operationState.status === "PendingSignature" || operationState.status === "Mining";
export const isOperationFailed = (operationState) =>
    operationState.status === "Fail" || operationState.status === "Exception";
export const isOperationSucceeded = (operationState) =>
    operationState.status === "Success";

export const getFailureMessage = (swapApproveState, swapExecuteState) => {
    if (isOperationPending(swapApproveState) || isOperationPending(swapExecuteState)) {
        return undefined;
    }

    if (isOperationFailed(swapApproveState)) {
        return "Approval failed - " + swapApproveState.errorMessage;
    }

    if (isOperationFailed(swapExecuteState)) {
        return "Swap failed - " + swapExecuteState.errorMessage;
    }

    return undefined;
};