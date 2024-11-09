import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nwxigqrlnuwfygkmhiat.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGlncXJsbnV3Znlna21oaWF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE2NjIwNSwiZXhwIjoyMDQ2NzQyMjA1fQ.PN-reOjTE2p_ej9qL-1LXZQktbUl8yVaHfXeC_dWNW0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGlncXJsbnV3Znlna21oaWF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE2NjIwNSwiZXhwIjoyMDQ2NzQyMjA1fQ.PN-reOjTE2p_ej9qL-1LXZQktbUl8yVaHfXeC_dWNW0"
    }
})