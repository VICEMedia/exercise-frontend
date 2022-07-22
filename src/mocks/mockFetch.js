const showsListResponse = [{
    "id": "a1",
    "title": "Gaycation",
    "episodes": 24,
    "product_image_url": "/images/gaycation.jpg"
}];

const dogImagesResponse = {
    message: [
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ",
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
    ],
};

export default async function mockFetch(url) {
    switch (url) {
        case "https://localhost:3000/shows.json": {
            return {
                ok: true,
                status: 200,
                json: async () => showsListResponse,
            };
        }
        // case "https://dog.ceo/api/breed/husky/images" :
        // case "https://dog.ceo/api/breed/cattledog/images": {
        //     return {
        //         ok: true,
        //         status: 200,
        //         json: async () => dogImagesResponse,
        //     };
        // }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}