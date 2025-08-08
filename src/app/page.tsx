import { RootLayout } from "@/components/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            記憶を整理する新しい方法
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Who Was That? は、Xでフォローしている人の情報を整理し、
            いつどこで出会った人か記録しておくためのツールです。
          </p>
          <div className="mt-8">
            <a
              href="/connections"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#13bfd6] hover:bg-[#56deea] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13bfd6]"
            >
              はじめる
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3  bg-[#13bfd6] rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    新規登録
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    出会った人の情報を素早く記録。名前、場所、状況など、必要な情報を簡単に保存できます。
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="/connections" className="block">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 transition-colors hover:bg-gray-100">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-[#36afc4] rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      繋がり一覧
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      タグ付けや検索機能で、記録した情報を簡単に見つけ出すことができます。
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-[#4eb0c5] rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    リマインダー
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    次回の約束や、フォローアップが必要な事項を忘れないようにリマインドします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
