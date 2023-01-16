import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | SalafiyahNikah`;
    }, [title])
};

export default useTitle;