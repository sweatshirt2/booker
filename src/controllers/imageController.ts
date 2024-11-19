import { Image } from '../entities/Room';

export default class ImageController {
  static index(): Image[] {
    console.log(`In the image index controller`);
    return [];
  }

  static details(id: string): Partial<Image> {
    console.log(`Image controller, Details for the image with the id ${id}`)
    return { id };
  }

  static create(body: Partial<Image>): Partial<Image> & { message: string } {
    console.log(`Image controller, Create the image ${JSON.stringify(body)}`);
    return { message: 'created successfully', ...body };
  }

  static update(id: string, body: Partial<Image>) {
    console.log(`Image controller, Update the image with id ${id}, with properties ${{ ...body, id }}`);
    return { message: 'updated successfully', ...body };
  }

  static destroy(id: string) {
    console.log(`Image controller, Image with id ${id} removed successfully`);
    return { message: 'removed successfully' };
  }
}
