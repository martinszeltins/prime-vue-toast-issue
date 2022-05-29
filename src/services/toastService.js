import { useToast } from "primevue/usetoast";

const showToast = () => {
    const toast = useToast();

    toast.add({ severity: 'info', detail:'Hello' });
}

export { showToast }
