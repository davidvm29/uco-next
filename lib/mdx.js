import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import fs from 'fs';
import path from "path";
import { getStaticProps } from "../lib/getStatic"; // Cambiado el import

const root = process.cwd();

export const getFilesMenu = (idioma) => {
    const dirPath = path.join(root, 'data', 'menu', idioma);
    const files = fs.readdirSync(dirPath);
    const fileStats = files.map(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        return { name: file, modified: stats.mtime };
    });
    fileStats.sort((a, b) => b.modified - a.modified);
    return fileStats.slice(0, 4).map(file => file.name);
};

export const getFiles = (idioma) => {
    const dirPath = path.join(root, 'data', 'noticias', idioma);
    const files = fs.readdirSync(dirPath);
    const fileStats = files.map(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        return { name: file, modified: stats.mtime };
    });
    fileStats.sort((a, b) => b.modified - a.modified);
    return fileStats.slice(0, 4).map(file => file.name);
};

export const getImages = () => {
    // Obtener la lista de todas las imágenes
    const allImages = fs.readdirSync(path.join(root, 'public', 'carousel-images'));
    // Ordenar las imágenes por fecha de modificación en orden descendente para que las más nuevas aparezcan primero
    const sortedImages = allImages.sort((a, b) => {
        const statA = fs.statSync(path.join(root, 'public', 'carousel-images', a));
        const statB = fs.statSync(path.join(root, 'public', 'carousel-images', b));
        return statB.mtime.getTime() - statA.mtime.getTime();
    });

    // Seleccionar las 9 imágenes más nuevas
    const newestImages = sortedImages.slice(0, 9);

    return newestImages;
};

export const getFileBySlug = async (slug, locale, folder) => {
    const filePath = path.join(root, "data", folder, locale, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return {
            source: null,
            frontmatter: {
                slug,
                title: 'File not found',
                content: 'The requested file does not exist.'
            }
        };
    }

    const mdxSource = fs.readFileSync(filePath, "utf-8");
    const { data, content } = await matter(mdxSource);
    const source = await serialize(content, {});
    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    };
};



export const getAllFilesMetadata = (idioma) => {
    const files = getFiles(idioma);
    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, "data","noticias", idioma, postSlug), "utf-8");
        const { data } = matter(mdxSource);
        return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts];
    }, []);
};

export const getRelatedPosts = (currentPostSlug, locale) => {
    const currentPostFilePath = path.join(root, "data","noticias", locale, `${currentPostSlug}.mdx`);

    // Verifica si el archivo existe antes de intentar leerlo
    if (!fs.existsSync(currentPostFilePath)) {
        console.error(`File not found: ${currentPostFilePath}`);
        return []; // Devuelve un arreglo vacío o algún tipo de valor predeterminado
    }

    const currentPostMdxSource = fs.readFileSync(currentPostFilePath, "utf-8");
    const { data: currentPostData } = matter(currentPostMdxSource);
    const currentPostHashtags = currentPostData.hastag || [];

    const allFilesMetadata = getAllFilesMetadata(locale);

    const relatedPosts = allFilesMetadata.filter((file) => {
        return file.slug !== currentPostSlug && file.hastag && file.hastag
            .split(" ")
            .map(tag => tag.trim())
            .some(tag => currentPostHashtags.includes(tag));
    });

    const simplifiedRelatedPosts = relatedPosts.map(post => ({
        title: post.title,
        slug: post.slug
    }));

    return simplifiedRelatedPosts;
};


export const getRelatedPostsByLocation = (currentPostSlug, locale) => {
    const currentPostFilePath = path.join(root, "data", "noticias", locale, `${currentPostSlug}.mdx`);

    // Verifica si el archivo existe antes de intentar leerlo
    if (!fs.existsSync(currentPostFilePath)) {
        console.error(`File not found: ${currentPostFilePath}`);
        return []; // Devuelve un arreglo vacío o algún tipo de valor predeterminado
    }

    const currentPostMdxSource = fs.readFileSync(currentPostFilePath, "utf-8");
    const { data: currentPostData } = matter(currentPostMdxSource);
    const currentPostLocation = currentPostData.Lugar_publicacion || [];

    const allFilesMetadata = getAllFilesMetadata(locale);

    const relatedPosts = allFilesMetadata.filter((file) => {
        return file.slug !== currentPostSlug && file.Lugar_publicacion && file.Lugar_publicacion === currentPostLocation;
    });

    const simplifiedRelatedPosts = relatedPosts.map(post => ({
        title: post.title,
        slug: post.slug
    }));

    return simplifiedRelatedPosts;
};

export const getNoticiasFecha = (locale) => {
    const allFilesMetadata = getAllFilesMetadata(locale);

    // Creamos un objeto para organizar las noticias por fecha
    const noticiasPorFecha = {};

    // Iteramos sobre cada archivo
    allFilesMetadata.forEach((metadata) => {
        const { slug, title, Lugar_publicacion, fecha } = metadata;

        // Convertimos la fecha a un formato estándar para comparación
        const fechaFormateada = new Date(fecha).toDateString();

        // Si ya existe la fecha en el objeto, agregamos la metadata al arreglo existente
        if (noticiasPorFecha[fechaFormateada]) {
            noticiasPorFecha[fechaFormateada].push({ slug, title, Lugar_publicacion, fecha });
        } else { // Si no existe, creamos un nuevo arreglo con la metadata
            noticiasPorFecha[fechaFormateada] = [{ slug, title, Lugar_publicacion, fecha }];
        }
    });

    // Construimos el resultado final con las fechas y metadata agrupadas
    const resultado = Object.keys(noticiasPorFecha).map((fecha) => ({
        fecha,
        noticias: noticiasPorFecha[fecha]
    }));

    return resultado;
};


