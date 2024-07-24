export interface Announcement {
    _id: {
      $oid: string;
    };
    attachment_name: string;
    company_id: string;
    company_name: string;
    created_at: {
      $date: string;
    };
    created_by: string;
    published_time: {
      $date: string;
    };
    sentiment: string;
    source_url: string;
    sub_type: string;
    summary: string;
    ticker: string;
    type_id: string;
    year: string;
  }