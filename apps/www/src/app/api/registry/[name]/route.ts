import { NextResponse } from 'next/server';
import { z } from 'zod';

import { highlightFiles } from '@/lib/highlight-code';
import { getRegistryItem } from '@/lib/rehype-utils';
import { registry } from '@/registry/registry';

export const dynamic = 'force-static';

const ParamsSchema = z.object({
  name: z.string().min(1, 'Name parameter is required'),
});

export function generateStaticParams() {
  return registry.items.map(({ name }) => ({
    name,
  }));
}

export async function GET(_: Request, { params }: any) {
  const { name } = ParamsSchema.parse({ name: (await params).name });

  try {
    const item = await getRegistryItem(name);

    if (!item?.files) {
      return NextResponse.json({ files: null });
    }

    const highlightedFiles = await highlightFiles(item.files);

    return NextResponse.json({
      files: highlightedFiles,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(
        'Failed to get registry files:',
        name,
        error.issues[0].message
      );

      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error('Failed to get registry files:', name, error);

    return NextResponse.json(
      { error: `Failed to get registry files: ${name}` },
      { status: 500 }
    );
  }
}
