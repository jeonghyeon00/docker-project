package com.jh.my.blog.server.repository

import com.jh.my.blog.server.entity.Information
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface InformationRepository : JpaRepository<Information, Long> {
    fun getByName(name: String): Information?
}
