/**
 * A URL search params value
 */
export type TQuery = string | null;

export type TTeaseImage = {
  /**
   * Width of the image.
   */
  width: number;
  src: string;
}

export type TSearchResult = {
  /**
   * Date of the statistic.
   * Follows `YYYY-MM-DD` format.
   * 
   * @example `2023-01-10`;
   */
  date: string;
  /**
   * Description of the statistic.
   */
  description: string;
  /**
   * Unique id.
   */
  identifier: number;
  /**
   * URL of the image of the statistic.
   */
  image_url: string;
  /**
   * Link to the statistic.
   */
  link: string;
  /**
   * Is `0` if it is free content.
   * Is `1` if it is premium content.
   */
  premium: 0 | 1;
  /**
   * Subject of the statistic.
   */
  subject: string;
  /**
   * Multiple teaser images of different sizes.
   */
  teaser_image_urls: TTeaseImage[];
  /**
   * Title of the statistic.
   */
  title: string;
};