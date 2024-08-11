export const pagination = async (data , pageNumber) => {
    try {

        const pageSize = 6;
        const pages = Math.ceil( data.length/pageSize);
        const startIndex = 0;
        const num = (pageNumber - 1) * pageSize;
        const endIndex = num + pageSize;
        const finalData = data.slice(startIndex,endIndex);

        return {
            data:finalData,
            page:pageNumber,
            totalPage:pages,
            numberOfProducts:finalData.length,
            pageSize:pageSize
        }
        
    } catch (error) {
        console.error('Error while pagination', error.message);
        return {
            success: false,
            error: error.message
        };
    }
};