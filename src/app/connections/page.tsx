"use client";

import { useState } from "react";
import { RootLayout } from "@/components/layouts/RootLayout";
import { DEFAULT_CATEGORIES, Connection } from "@/types/connection";
import { mockConnections } from "@/data/mockConnections";
import { TwitterUserProfile } from "@/components/TwitterUserProfile";
import { TwitterProfileImage } from "@/components/TwitterProfileImage";

export default function ConnectionsPage() {
  const [selectedConnection, setSelectedConnection] = useState<Connection>(
    mockConnections[0]
  );
  return (
    <RootLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        {/* 左サイドバー */}
        <div className="w-64 bg-primary-extralight border-r border-gray-200">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/file.svg" alt="Logo" className="w-6 h-6" />
              <h2 className="text-lg font-semibold text-gray-900">
                カテゴリー
              </h2>
            </div>
            <div className="space-y-1">
              {DEFAULT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-50"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 中央の人物一覧 */}
        <div className="w-72 border-r border-gray-200 bg-white">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="名前、@ユーザー名"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {mockConnections.map((connection) => (
                <div
                  key={connection.id}
                  className={`flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer ${
                    selectedConnection.id === connection.id
                      ? "bg-gray-50 ring-2 ring-gray-300 ring-opacity-50"
                      : ""
                  }`}
                  onClick={() => setSelectedConnection(connection)}
                >
                  <TwitterProfileImage twitterId={connection.twitterId} />
                  <div>
                    <div className="font-medium text-gray-900">
                      {connection.displayName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {connection.username}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右側の詳細情報 */}
        <div className="flex-1 bg-gray-50">
          <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {/* Twitterプロフィール */}
                <TwitterUserProfile username={selectedConnection.twitterId} />

                {/* 関係性情報 */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    あなたとの関わり
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">関係</div>
                        <div className="text-gray-900">
                          {selectedConnection.relationship}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          出会った場所
                        </div>
                        <div className="text-gray-900">
                          {selectedConnection.meetingContext}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* タグ */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    タグ
                  </h3>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedConnection.tags.map((tag) => {
                        let tagStyle = "";
                        switch (tag) {
                          case "エンジニア":
                            tagStyle = "bg-emerald-100 text-emerald-800";
                            break;
                          case "Tech":
                            tagStyle = "bg-sky-50 text-sky-800";
                            break;
                          case "React":
                            tagStyle = "bg-cyan-100 text-cyan-800";
                            break;
                          case "Go":
                            tagStyle = "bg-sky-200 text-sky-900";
                            break;
                          default:
                            tagStyle = "bg-gray-100 text-gray-800";
                        }
                        return (
                          <span
                            key={tag}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyle}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* メモ */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    メモ
                  </h3>
                  <div className="mt-4">
                    <p className="text-gray-600">{selectedConnection.notes}</p>
                  </div>
                </div>

                {/* フォローアップ */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                    次回
                  </h3>
                  <div className="mt-4">
                    <div className="text-sm text-gray-500">次回</div>
                    <div className="text-gray-900">
                      {selectedConnection.followUpDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
